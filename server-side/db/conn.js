import { connect } from "mongoose";
import dotenv from 'dotenv'
//Configured dotenv
dotenv.config();

async function conn() {
    try {
        await connect("mongodb+srv://huesnaiin:pT1FIdGd2TIBHPbp@cluster0.pci6cnq.mongodb.net/");
    }
    catch (err) {
        console.log(err)
    }
}

conn();