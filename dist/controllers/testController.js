var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as categoryRepo from "../repositories/categoryRepository.js";
import * as discipline from "../repositories/disciplineRepostory.js";
import * as teacher from "../repositories/teacherRepository.js";
import * as teachersDiscipline from "../repositories/teachersDisciplineRepository.js";
import * as testRepo from "../repositories/testRepository.js";
import * as termRepo from "../repositories/termRepository.js";
import { failsConflict } from "../utils/errorUtils.js";
export function insertNewTest(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var test, testExist, categoryId, disciplineId, teacherId, teachersDisciplineId, testFormated;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    test = req.body;
                    return [4 /*yield*/, testRepo.getTestByUrl(test.pdfUrl)];
                case 1:
                    testExist = _a.sent();
                    if (testExist)
                        throw failsConflict("Test already exist");
                    return [4 /*yield*/, categoryRepo.findCategoryByName(test.categoryName)];
                case 2:
                    categoryId = _a.sent();
                    return [4 /*yield*/, discipline.findDisciplineByName(test.disciplineName)];
                case 3:
                    disciplineId = _a.sent();
                    return [4 /*yield*/, teacher.findTeacherByName(test.teacherName)];
                case 4:
                    teacherId = _a.sent();
                    return [4 /*yield*/, teachersDiscipline.findTeachersDisciplineById(teacherId.id, disciplineId.id)];
                case 5:
                    teachersDisciplineId = _a.sent();
                    testFormated = {
                        name: test.name,
                        pdfUrl: test.pdfUrl,
                        categoryId: categoryId.id,
                        teachersDisciplineId: teachersDisciplineId.id
                    };
                    return [4 /*yield*/, testRepo.insertTest(testFormated)];
                case 6:
                    _a.sent();
                    res.sendStatus(201); //created
                    return [2 /*return*/];
            }
        });
    });
}
export function getTestsOrder(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var disciplineParam, termparam, category, resultdis, resultterm, resultcat;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    disciplineParam = req.params.discipline;
                    termparam = parseInt(req.params.terms);
                    category = req.params.category;
                    return [4 /*yield*/, discipline.findDisciplineByName(disciplineParam)];
                case 1:
                    resultdis = _a.sent();
                    return [4 /*yield*/, termRepo.findTermByNumber(termparam)];
                case 2:
                    resultterm = _a.sent();
                    return [4 /*yield*/, categoryRepo.findCategoryByName(category)];
                case 3:
                    resultcat = _a.sent();
                    res.send({
                        disciplineName: resultdis.name,
                        termNumber: resultterm.number,
                        categoryTest: resultcat.name
                    });
                    return [2 /*return*/];
            }
        });
    });
}
