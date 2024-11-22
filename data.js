// 模拟音频文件数据
const allAudioFiles = [
    { title: "1.愚拙的童女", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/1%E6%84%9A%E6%8B%99%E7%9A%84%E7%AB%A5%E5%A5%B3.mp3" },
    { title: "2.聪明的童女", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/2%E8%81%AA%E6%98%8E%E7%9A%84%E7%AB%A5%E5%A5%B3.mp3" },
    { title: "3.第一位天使的信息", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/3.%E7%AC%AC%E4%B8%80%E4%BD%8D%E5%A4%A9%E4%BD%BF%E4%BF%A1%E6%81%AF.mp3" },
    { title: "4.第二位天使的信息", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/4.%E7%AC%AC%E4%BA%8C%E4%BD%8D%E5%A4%A9%E4%BD%BF%E4%BF%A1%E6%81%AF.mp3" },
    { title: "5.第三位天使的信息", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/5.%E7%AC%AC%E4%B8%89%E4%BD%8D%E5%A4%A9%E4%BD%BF%E4%BF%A1%E6%81%AF.mp3" },
    { title: "6.因信称义（1）上帝宝贵的应许", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/6.%E5%9B%A0%E4%BF%A1%E7%A7%B0%E4%B9%89%EF%BC%881%EF%BC%89%E4%B8%8A%E5%B8%9D%E5%AE%9D%E8%B4%B5%E7%9A%84%E5%BA%94%E8%AE%B8.mp3" },
    { title: "7.因信称义（2 ）基督的功劳是我们唯一的希望", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/7.%E5%9B%A0%E4%BF%A1%E7%A7%B0%E4%B9%89%EF%BC%882%20%EF%BC%89%E5%9F%BA%E7%9D%A3%E7%9A%84%E5%8A%9F%E5%8A%B3%E6%98%AF%E6%88%91%E4%BB%AC%E5%94%AF%E4%B8%80%E7%9A%84%E5%B8%8C%E6%9C%9B.mp3" },
    { title: "8.因信称义（3）基督是赐生命的主", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/8.%E5%9B%A0%E4%BF%A1%E7%A7%B0%E4%B9%89%EF%BC%883%EF%BC%89%E5%9F%BA%E7%9D%A3%E6%98%AF%E8%B5%90%E7%94%9F%E5%91%BD%E7%9A%84%E4%B8%BB.mp3" },
    { title: "9.因信称义（4）不是依靠自己的功劳", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/9.%E5%9B%A0%E4%BF%A1%E7%A7%B0%E4%B9%89%EF%BC%884%EF%BC%89%E4%B8%8D%E6%98%AF%E4%BE%9D%E9%9D%A0%E8%87%AA%E5%B7%B1%E7%9A%84%E5%8A%9F%E5%8A%B3.mp3" },
    { title: "10.因信称义（5）认识自我", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/10.%E5%9B%A0%E4%BF%A1%E7%A7%B0%E4%B9%89%EF%BC%885%EF%BC%89%E8%AE%A4%E8%AF%86%E8%87%AA%E6%88%91.mp3" }
];