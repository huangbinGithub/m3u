// https://github.com/YanG-1989/m3u

const axios = require("axios");
const fs = require("fs").promises;
const { resetm3u } = require("./lib");
async function processData() {
  try {
    // const url = "https://raw.githubusercontent.com/YanG-1989/m3u/main/Gather.m3u";
    const url = "https://live.kilvn.com/iptv.m3u"
    // const url = "https://cdn.jsdelivr.net/gh/YangG-1989/m3u@main/Gather.m3u"
    // 从指定URL获取数据
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
    // 在这里处理数据
    // 这里需要根据你的具体需求来处理数据
    const processedData = resetm3u(data); // 替换为你的数据处理逻辑

    // 将处理后的数据写入文件
    await fs.writeFile("data.m3u", processedData, "utf8");

    console.log("数据处理完成并保存");
  } catch (error) {
    console.error("发生错误:", error);
    process.exit(1);
  }
}
processData();
