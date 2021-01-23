const tEstateBrokerage = require("./models/tEstateBrokerage");
const tAdmin = require("./models/tAdmin");
const { sequelize } = require("./models");
const { DATA } = require("./realEstateInfo/seoulInfo.json");
const bcrypt = require("bcrypt");
sequelize
  .sync({ force: false })
  .then(() => {
    //seoul();
  })
  .catch((err) => {
    console.error(err);
  });

// async function seoul() {
//   for (let i = 0; i < DATA.length; i++) {
//     let telno = DATA[i].telno;
//     if (telno === "") telno = null;
//     try {
//       await tEstateBrokerage.create({
//         regno: DATA[i].ra_regno,
//         address: DATA[i].address,
//         cmpNm: DATA[i].cmp_nm,
//         telNo: telno,
//         bName: DATA[i].rdealer_nm,
//         status: DATA[i].sts_gbn,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }

async function a() {
  const hash = await bcrypt.hash("dlandif22", 12);
  tAdmin
    .create({
      id : 'a1',
      a_id: "dlandif22",
      a_password: hash,
    })
    .then(() => {
      console.log("create");
    })
    .catch((err) => {
      console.error(err);
    });
}
a();