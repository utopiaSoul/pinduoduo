/**
 * 拼多多特定接口抓取脚本
 */

// 处理请求头
if ($request) {
    let url = $request.url;
    if (url.includes("/api/oak") || url.includes("/api/turing")) {
        console.log("Request URL:", url);
        console.log("Request Headers:", JSON.stringify($request.headers, null, 2));
        console.log("Request Body:", $request.body || "No Body");
    }

    // 返回原请求，不修改
    $done({});
}

// 处理响应体
if ($response) {
    let url = $response.url;
    if (url.includes("/api/oak") || url.includes("/api/turing")) {
        console.log("Response URL:", url);
        console.log("Response Headers:", JSON.stringify($response.headers, null, 2));
        console.log("Response Body:", $response.body || "No Body");
    }

    // 返回原响应，不修改
    $done({});
}
