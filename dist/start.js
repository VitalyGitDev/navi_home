"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_safe_1 = __importDefault(require("dotenv-safe"));
const path_1 = __importDefault(require("path"));
dotenv_safe_1.default.config({
    path: path_1.default.resolve(process.cwd(), '.env')
});
const appStart = () => __awaiter(this, void 0, void 0, function* () {
    const { startHttp } = require('./server/http');
    startHttp();
});
appStart()
    .then(() => (console.log('Service UP and Running . . .')))
    .catch((err) => {
    if (err) {
        console.log('An ERROR occurs during application start: ', err.message);
    }
    setTimeout(() => process.exit(1), 1000);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc3RhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLDhEQUFvQztBQUNwQyxnREFBdUI7QUFFdkIscUJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDZCxJQUFJLEVBQUUsY0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDO0NBQzVDLENBQUMsQ0FBQTtBQUVGLE1BQU0sUUFBUSxHQUFHLEdBQVMsRUFBRTtJQUN4QixNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQzlDLFNBQVMsRUFBRSxDQUFBO0FBQ2YsQ0FBQyxDQUFBLENBQUE7QUFFRCxRQUFRLEVBQUU7S0FDTCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztLQUN6RCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUNYLElBQUksR0FBRyxFQUFFO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7S0FDekU7SUFDRCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUMzQyxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52J1xuaW1wb3J0IGRvdGVudlNhZmUgZnJvbSAnZG90ZW52LXNhZmUnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5kb3RlbnZTYWZlLmNvbmZpZyh7XG4gICAgcGF0aDogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICcuZW52Jylcbn0pXG5cbmNvbnN0IGFwcFN0YXJ0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgc3RhcnRIdHRwIH0gPSByZXF1aXJlKCcuL3NlcnZlci9odHRwJylcbiAgICBzdGFydEh0dHAoKVxufVxuXG5hcHBTdGFydCgpXG4gICAgLnRoZW4oKCkgPT4gKGNvbnNvbGUubG9nKCdTZXJ2aWNlIFVQIGFuZCBSdW5uaW5nIC4gLiAuJykpKVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBbiBFUlJPUiBvY2N1cnMgZHVyaW5nIGFwcGxpY2F0aW9uIHN0YXJ0OiAnLCBlcnIubWVzc2FnZSlcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHByb2Nlc3MuZXhpdCgxKSwgMTAwMClcbiAgICB9KSJdfQ==