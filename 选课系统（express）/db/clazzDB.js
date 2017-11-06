
// export default {
//     findAll(){
    
//     },
//     batchDelete(){
    
//     }
// }
let pool = require('./pool');

module.exports = {
    //通过关键字查询
    query(keys){
      var sql = "select * from clazz where name like '%"
        +keys+"%' or createDate like '%"
        +keys+"%'" ;
      return pool.execute(sql);
    },
    //通过id查询
    findById(id){
      var sql = "select * from clazz where id = "+id;
      return pool.execute(sql);
    },
    findAll(){
      var sql = "select * from clazz";
      return pool.execute(sql);
    },
    batchDelete(ids){
      var sql = "delete from clazz where id in ("+ids.join()+")";
      return pool.execute(sql);
    },
    save(clazz){
      var sql = "insert into clazz values(null,'"
      +clazz.name+"',"
      +clazz.createDate+","
      +teacher_id+")";
      return pool.execute(sql);
    },
    update(clazz){
      var sql = "update clazz set name = '"
      +clazz.name+"',createDate = "
      +clazz.createDate+" where id ="
      +clazz.teacher_id;
      console.log(sql);
      return pool.execute(sql);
    }
}
