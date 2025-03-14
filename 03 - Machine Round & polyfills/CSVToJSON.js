const csvData = `id,parentId,data,
1,,root,
2,1,user,
3,1,newUser,
4,,myUser,
5,,MyData,
6,4,hello`

const csvToJson = (csvData) => {
    const splitArray = csvData.split("\n");
    const header = splitArray[0].split(",");
    const data = splitArray.slice(1);
    const result = [];
    
    for(const value of data) {
        const valueArr = value.split(",");
        let obj = {
            [header[0]]: valueArr[0],
            [header[1]]: valueArr[1],
            [header[2]]: valueArr[2],
            "children": []
        }
        
        if(!valueArr[1]){
            result.push(obj);
        }else{
            const parent = result.filter((item) => item.id === valueArr[1]);
            if(parent) parent[0].children.push(obj)
            
        }
    }
    
    return result
}

const output = csvToJson(csvData);
console.log(JSON.stringify(output));

/*
Output
[
    {
        "id": "1",
        "parentId": "",
        "data": "root",
        "children": [
            {
                "id": "2",
                "parentId": "1",
                "data": "user",
                "children": []
            },
            {
                "id": "3",
                "parentId": "1",
                "data": "newUser",
                "children": []
            }
        ]
    },
    {
        "id": "4",
        "parentId": "",
        "data": "myUser",
        "children": [
            {
                "id": "6",
                "parentId": "4",
                "data": "hello",
                "children": []
            }
        ]
    },
    {
        "id": "5",
        "parentId": "",
        "data": "MyData",
        "children": []
    }
]
*/
