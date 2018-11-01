"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const bodyParser = __importStar(require("body-parser"));
class App {
    constructor() {
        require('dotenv').config();
        this.express = express_1.default();
        this.middleware();
        this.database();
    }
    middleware() {
        this.express.use(morgan_1.default("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    database() {
        const mongoUri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
        const connectionOptions = {
            user: process.env.DB_USER,
            pass: process.env.DB_PWD,
            ssl: false
        };
        if (!process.env.DB_USER)
            delete connectionOptions.user;
        if (!process.env.DB_PWD)
            delete connectionOptions.pass;
        mongoose_1.default.Promise = global.Promise;
        // mongoose.connect(mongoUri, connectionOptions)
        mongoose_1.default.connect(mongoUri, { useNewUrlParser: true })
            .then(() => {
            console.log(`Connected to MongoDB database ${process.env.DB_NAME}@${process.env.DB_HOST}:${process.env.DB_PORT}`);
        })
            .catch(err => {
            console.log(err);
        });
    }
}
exports.default = new App().express;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLG9EQUE0QjtBQUM1Qix3REFBZ0M7QUFDaEMsd0RBQTBDO0FBRzFDLE1BQU0sR0FBRztJQUdMO1FBQ0ksT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQU8sRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLFVBQVU7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVNLFFBQVE7UUFDWCxNQUFNLFFBQVEsR0FBRyxhQUFhLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFbEcsTUFBTSxpQkFBaUIsR0FBRztZQUN0QixJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO1lBQ3pCLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU07WUFDeEIsR0FBRyxFQUFFLEtBQUs7U0FDYixDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztZQUNwQixPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQztRQUVsQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNO1lBQ25CLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDO1FBRTVCLGtCQUFRLENBQUMsT0FBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFFekMsZ0RBQWdEO1FBQ2hELGtCQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNoRCxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3RILENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwibW9yZ2FuXCI7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gXCJib2R5LXBhcnNlclwiO1xuXG5cbmNsYXNzIEFwcCB7XG4gICAgcHVibGljIGV4cHJlc3M6IGV4cHJlc3MuQXBwbGljYXRpb247XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG4gICAgICAgIHRoaXMuZXhwcmVzcyA9IGV4cHJlc3MoKTtcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlKCk7XG4gICAgICAgIHRoaXMuZGF0YWJhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbWlkZGxld2FyZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5leHByZXNzLnVzZShsb2dnZXIoXCJkZXZcIikpO1xuICAgICAgICB0aGlzLmV4cHJlc3MudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbiAgICAgICAgdGhpcy5leHByZXNzLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkYXRhYmFzZSgpIHtcbiAgICAgICAgY29uc3QgbW9uZ29VcmkgPSBgbW9uZ29kYjovLyR7cHJvY2Vzcy5lbnYuREJfSE9TVH06JHtwcm9jZXNzLmVudi5EQl9QT1JUfS8ke3Byb2Nlc3MuZW52LkRCX05BTUV9YDtcblxuICAgICAgICBjb25zdCBjb25uZWN0aW9uT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkRCX1VTRVIsXG4gICAgICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5EQl9QV0QsXG4gICAgICAgICAgICBzc2w6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFwcm9jZXNzLmVudi5EQl9VU0VSKVxuICAgICAgICAgICAgZGVsZXRlIGNvbm5lY3Rpb25PcHRpb25zLnVzZXI7XG5cbiAgICAgICAgaWYgKCFwcm9jZXNzLmVudi5EQl9QV0QpXG4gICAgICAgICAgICBkZWxldGUgY29ubmVjdGlvbk9wdGlvbnMucGFzcztcblxuICAgICAgICAoPGFueT5tb25nb29zZS5Qcm9taXNlKSA9IGdsb2JhbC5Qcm9taXNlO1xuXG4gICAgICAgIC8vIG1vbmdvb3NlLmNvbm5lY3QobW9uZ29VcmksIGNvbm5lY3Rpb25PcHRpb25zKVxuICAgICAgICBtb25nb29zZS5jb25uZWN0KG1vbmdvVXJpLCB7IHVzZU5ld1VybFBhcnNlcjogdHJ1ZSB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDb25uZWN0ZWQgdG8gTW9uZ29EQiBkYXRhYmFzZSAke3Byb2Nlc3MuZW52LkRCX05BTUV9QCR7cHJvY2Vzcy5lbnYuREJfSE9TVH06JHtwcm9jZXNzLmVudi5EQl9QT1JUfWApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBcHAoKS5leHByZXNzOyJdfQ==
