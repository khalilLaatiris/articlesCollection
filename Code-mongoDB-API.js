// This function is the webhook's request handler.
exports = function(payload, response) {
    // Data can be extracted from the request as follows:

    // Query params, e.g. '?arg1=hello&arg2=world' => {arg1: "hello", arg2: "world"}
    //const {arg1, arg2} = payload.query;

    // Headers, e.g. {"Content-Type": ["application/json"]}
    //const contentTypes = payload.headers["Content-Type"];

    // Raw request body (if the client sent one).
    // This is a binary object that can be accessed as a string using .text()
    //const body = EJSON.parse(payload.body);
    //console.log("arg1, arg2: ", arg1, arg2);
    //console.log("Content-Type:", JSON.stringify(contentTypes));
    //console.log("Request body:", body);

    // You can use 'context' to interact with other Realm features.
    // Accessing a value:
    // var x = context.values.get("value_name");
    const body = EJSON.parse(payload.body.text());
    var searching_keys = {};
    if (body.headline) searching_keys.headline = body.headline;
    if (body.subject) searching_keys.subject =  body.subject;
    if (body.date_date) searching_keys.date_date = body.date_date;
    if (body.author) searching_keys.author = body.author;
    
    // Querying a mongodb service:
    const ActicleCollection = context.services.get("mongodb-atlas").db("ArticleCollection").collection("Articles");
   
    console.log("my object : " , searching_keys)
    console.log("Request body:", body.headline);
    // Calling a function:
    // const result = context.functions.execute("function_name", arg1, arg2);

    // The return value of the function is sent as the response back to the client
    // when the "Respond with Result" setting is set.
    //return  "Hello World!";
    return ActicleCollection.find(searching_keys).limit(100).toArray();
};
