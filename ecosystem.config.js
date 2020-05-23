module.exports = {
  apps: [{
    name: "studyinv",
    script: "src/server.js",
    instances: "max",
    max_memory_restart: "200M",
    env: {
      NODE_ENV: "development",
      APP_SECRET: "x@TfY<ubwd%Cr?fdQe;UOrRTh-Kig/o&e|xY,Hrn&z*yM0q:yYaSKN+zs1jBF",
      MONGO_URI: "mongodb://localhost:27017/gb_edu?retryWrites=true&w=majority",
      PORT: 3000,
      APP_URL: "http://localhost:3000"
    },
    env_production: {
      NODE_ENV: "production",
      APP_SECRET: "x@TfY<ubwd%Cr?fdQe;UOrRTh-Kig/o&e|xY,Hrn&z*yM0q:yYaSKN+zs1jBF",
      MONGO_URI: "mongodb+srv://anwar:15651830@cluster0-hspyh.mongodb.net/gbedu?retryWrites=true&w=majority",
      PORT: 3000,
      APP_URL: "http://localhost:3000"
    }
  }]
}