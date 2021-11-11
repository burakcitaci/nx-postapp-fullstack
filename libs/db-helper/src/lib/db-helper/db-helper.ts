import * as mongoose from 'mongoose';
export class DbHelper {
    static init(): void {
        mongoose.connect('mongodb+srv://dbUser:4oyfGz89OxwRbLDb@cluster0.sv7fg.mongodb.net/myThirdDatabase?retryWrites=true&w=majority')
            .then(() => console.log('Connection to mongoDB successful'))
            .catch((e: Error) => console.log(`Could not connect to mongo.\n\n${e}`));
    }
}