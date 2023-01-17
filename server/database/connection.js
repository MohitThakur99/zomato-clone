import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};

export default async () => {
    return mongoose.connect(process.env.MONGO_URL, options);
};

