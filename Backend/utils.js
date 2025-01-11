import * as fs from 'fs';

export const readIdFromDB = async (id) => {

    const data = fs.readFileSync('../datas.json', 'utf8');
    const json = JSON.parse(data)
    const item = json.find(it => it.id == id);

    return item;
}

export const storeToDB = async (data) => {
    const f = fs.readFileSync('../datas.json', 'utf8');
    const json = JSON.parse(f);
    const filtered = json.filter(it => it.id != data.id);

    // if (!filtered)
        (await json).push(data);
    console.log(json);

    fs.writeFileSync('../datas.json', JSON.stringify(json, null, 2));
}