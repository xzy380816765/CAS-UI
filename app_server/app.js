const express = require("express");
const pool = require("./pool");
const cors = require("cors");//引入跨域模块

var app = express();
app.use(express.static(__dirname+"/public"));
app.listen(3000,()=>{
    console.log("服务器创建成功")
});
//解决跨域访问的问题
app.use(cors({
    origin:["http://127.0.0.1:3001","http://localhost:3001"],
    MSCredentials:true
}))

//CAS改装首页轮播图片
app.get("/imgList",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3000/img/banner1.jpg"},
        {id:2,img_url:"http://127.0.0.1:3000/img/banner2.jpg"},
        {id:3,img_url:"http://127.0.0.1:3000/img/index_top-01.jpg",title:"CAS部落"},
        {id:4,img_url:"http://127.0.0.1:3000/img/index_top-02.jpg",title:"参展品牌"},
        {id:5,img_url:"http://127.0.0.1:3000/img/index_top-03.jpg",title:"Show Girl"},
        {id:6,img_url:"http://127.0.0.1:3000/img/index_top-04.jpg",title:"参展咨询"},
        {id:7,img_url:"http://127.0.0.1:3000/img/news-1538187994501.jpg",title:"第八届瑞立CAS改装车展"},
        {id:8,img_url:"http://127.0.0.1:3000/img/news-1538171816335.png",title:"2018瑞立CAS改装车展精彩视频"},
        {id:9,img_url:"http://127.0.0.1:3000/img/news-1520587459145.jpg",title:"2017 CAS改装车展精彩花絮"},
        {id:10,img_url:"http://127.0.0.1:3000/img/add_idx_r.jpg",title:"广告"},
        {id:11,img_url:"http://127.0.0.1:3000/img/news.jpg",title:"中国汽车文化嘉年华#2018瑞立CAS现场XMEETING 余音不减一波不完整回顾"},
        {id:12,img_url:"http://127.0.0.1:3000/img/news-1542783292428.jpg",title:"五大升级两大渠道诠释实力丨2019瑞立CAS改装车展新闻发布会暨首届改装行业沙龙配对会（华东站）圆满举办"},
        {id:13,img_url:"http://127.0.0.1:3000/img/news-1538112673311.jpg",title:"答应你们的小姐姐，美图走一波"},
        {id:14,img_url:"http://127.0.0.1:3000/img/news-1538111954580.jpg",title:"BMW携全新高性能产品亮相 2018瑞立CAS改装车展"},
        {id:15,img_url:"http://127.0.0.1:3000/img/news-1538103664914.jpg",title:"2018第八届瑞立CAS改装车展丨美车赏析图集"},
        {id:16,img_url:"http://127.0.0.1:3000/img/news-1538103297191.jpg",title:"中国汽车文化嘉年华#2018瑞立CAS现场XMEETING 余音不减一波不完整回顾"}      
    ]
    res.send(obj);
});
