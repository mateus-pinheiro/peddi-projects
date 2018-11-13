"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const morgan_1 = require("morgan");
const fs = require("fs");
class GeradorToken {
    constructor() {
        this.generateToken = (payload) => {
            const signOptions = {
                issuer: process.env.TOKEN_ISSUER,
                subject: process.env.TOKEN_SUBJECT,
                audience: process.env.TOKEN_AUDIENCE,
                expiresIn: '10m',
                algorithm: 'RS256'
            };
            try {
                return 'Bearer ' + jwt.sign(payload, this.privateKey, signOptions);
            }
            catch (error) {
                console.log(error);
            }
            return morgan_1.token;
        };
        this.privateKey = fs.readFileSync('./jwt/private.key', 'utf8');
        this.publicKey = fs.readFileSync('./jwt/public.key', 'utf8');
    }
    /**
     * @param payload dados que deseja codificar para base64.
     */
    gerarToken(payload) {
        // let token = jwt.sign(payload, process.env.SECRET, {expiresIn: 8640});
        // return token;
    }
    /**
     *
     * @param token a ser decodificado.
     */
    decodificaToken(token) {
        let decoded = jwt.decode(token, { complete: true });
        return decoded;
    }
    verificarToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                // if(!token) throw new Error('Token Inválido!');
                // jwt.verify(token, process.env.EPOC_KEY, (err, decoded) => {
                // if(err) throw err;
                // return resolve(decoded);
                // });
            });
        });
    }
}
exports.GeradorToken = GeradorToken;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktb3V0Ym91bmQvdXRpbC90b2tlbi1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBb0M7QUFDcEMsbUNBQStCO0FBQy9CLHlCQUEwQjtBQUMxQixNQUFhLFlBQVk7SUFLeEI7UUFzQk8sa0JBQWEsR0FBRyxDQUFDLE9BQVksRUFBRSxFQUFFO1lBQ2pDLE1BQU0sV0FBVyxHQUFHO2dCQUNoQixNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZO2dCQUNoQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhO2dCQUNsQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjO2dCQUNwQyxTQUFTLEVBQUUsS0FBSztnQkFDaEIsU0FBUyxFQUFFLE9BQU87YUFDM0IsQ0FBQTtZQUNELElBQUk7Z0JBQ0gsT0FBTyxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUNuRTtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbkI7WUFDSyxPQUFPLGNBQUssQ0FBQztRQUNqQixDQUFDLENBQUE7UUFuQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUU7O09BRUc7SUFDSSxVQUFVLENBQUMsT0FBWTtRQUMxQix3RUFBd0U7UUFDeEUsZ0JBQWdCO0lBQ3BCLENBQUM7SUFFSjs7O09BR0c7SUFDSSxlQUFlLENBQUMsS0FBVTtRQUNoQyxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFtQlksY0FBYyxDQUFDLEtBQWE7O1lBQ3hDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDOUIsaURBQWlEO2dCQUNqRCw4REFBOEQ7Z0JBQzdELHFCQUFxQjtnQkFDckIsMkJBQTJCO2dCQUM1QixNQUFNO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO0tBQUE7Q0FDRDtBQXJERCxvQ0FxREMiLCJmaWxlIjoiYXBpLW91dGJvdW5kL3V0aWwvdG9rZW4tY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgeyB0b2tlbiB9IGZyb20gJ21vcmdhbic7XG5pbXBvcnQgZnMgPSByZXF1aXJlKCdmcycpO1xuZXhwb3J0IGNsYXNzIEdlcmFkb3JUb2tlbiB7XG5cblx0cHJpdmF0ZSBwcml2YXRlS2V5OiBhbnk7XG5cdHByaXZhdGUgcHVibGljS2V5OiBhbnk7XG5cblx0Y29uc3RydWN0b3IoKXtcblx0XHR0aGlzLnByaXZhdGVLZXkgPSBmcy5yZWFkRmlsZVN5bmMoJy4vand0L3ByaXZhdGUua2V5JywgJ3V0ZjgnKTtcblx0XHR0aGlzLnB1YmxpY0tleSA9IGZzLnJlYWRGaWxlU3luYygnLi9qd3QvcHVibGljLmtleScsICd1dGY4Jyk7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBwYXlsb2FkIGRhZG9zIHF1ZSBkZXNlamEgY29kaWZpY2FyIHBhcmEgYmFzZTY0LlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXJhclRva2VuKHBheWxvYWQ6IGFueSkge1xuICAgICAgICAvLyBsZXQgdG9rZW4gPSBqd3Quc2lnbihwYXlsb2FkLCBwcm9jZXNzLmVudi5TRUNSRVQsIHtleHBpcmVzSW46IDg2NDB9KTtcbiAgICAgICAgLy8gcmV0dXJuIHRva2VuO1xuICAgIH1cbiAgICBcblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSB0b2tlbiBhIHNlciBkZWNvZGlmaWNhZG8uXG5cdCAqL1xuXHRwdWJsaWMgZGVjb2RpZmljYVRva2VuKHRva2VuOiBhbnkpIHtcblx0XHRsZXQgZGVjb2RlZCA9IGp3dC5kZWNvZGUodG9rZW4sIHtjb21wbGV0ZTp0cnVlfSk7XG5cdFx0cmV0dXJuIGRlY29kZWQ7XG5cdH1cblxuXHRwdWJsaWMgZ2VuZXJhdGVUb2tlbiA9IChwYXlsb2FkOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3Qgc2lnbk9wdGlvbnMgPSB7XG4gICAgICAgICAgICBpc3N1ZXI6IHByb2Nlc3MuZW52LlRPS0VOX0lTU1VFUixcbiAgICAgICAgICAgIHN1YmplY3Q6IHByb2Nlc3MuZW52LlRPS0VOX1NVQkpFQ1QsXG4gICAgICAgICAgICBhdWRpZW5jZTogcHJvY2Vzcy5lbnYuVE9LRU5fQVVESUVOQ0UsXG4gICAgICAgICAgICBleHBpcmVzSW46ICcxMG0nLFxuICAgICAgICAgICAgYWxnb3JpdGhtOiAnUlMyNTYnXG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gJ0JlYXJlciAnICsgand0LnNpZ24ocGF5bG9hZCwgdGhpcy5wcml2YXRlS2V5LCBzaWduT3B0aW9ucyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHR9XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG5cblxuXHRwdWJsaWMgYXN5bmMgdmVyaWZpY2FyVG9rZW4odG9rZW46IHN0cmluZykge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0Ly8gaWYoIXRva2VuKSB0aHJvdyBuZXcgRXJyb3IoJ1Rva2VuIEludsOhbGlkbyEnKTtcblx0XHRcdC8vIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkVQT0NfS0VZLCAoZXJyLCBkZWNvZGVkKSA9PiB7XG5cdFx0XHRcdC8vIGlmKGVycikgdGhyb3cgZXJyO1xuXHRcdFx0XHQvLyByZXR1cm4gcmVzb2x2ZShkZWNvZGVkKTtcblx0XHRcdC8vIH0pO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=
