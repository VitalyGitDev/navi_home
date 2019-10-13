"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify = require('fastify')({ logger: true });
function startHttp() {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.listen(process.env.APP_PORT, (err, address) => {
            if (err)
                throw err;
            fastify.log.info(`server listening on ${address}`);
        });
    });
}
exports.startHttp = startHttp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvaHR0cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFJbkQsU0FBc0IsU0FBUzs7UUFDM0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQVEsRUFBRSxPQUFZLEVBQUUsRUFBRTtZQUM1RCxJQUFJLEdBQUc7Z0JBQUUsTUFBTSxHQUFHLENBQUE7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFDdEQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0NBQUE7QUFMRCw4QkFLQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZhc3RpZnkgPSByZXF1aXJlKCdmYXN0aWZ5JykoeyBsb2dnZXI6dHJ1ZSB9KVxuICAgIC8vIHsgRmFzdGlmeVJlcGx5LCBNaWRkbGV3YXJlLCBQbHVnaW4sIFJlZ2lzdGVyT3B0aW9ucyB9XG4vLyBpbXBvcnQgaHR0cCBmcm9tICdodHRwJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRIdHRwKCkge1xuICAgIGZhc3RpZnkubGlzdGVuKHByb2Nlc3MuZW52LkFQUF9QT1JULCAoZXJyOiBhbnksIGFkZHJlc3M6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnJcbiAgICAgICAgZmFzdGlmeS5sb2cuaW5mbyhgc2VydmVyIGxpc3RlbmluZyBvbiAke2FkZHJlc3N9YClcbiAgICB9KVxufSJdfQ==