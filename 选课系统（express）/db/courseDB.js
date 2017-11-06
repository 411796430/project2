
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
      var sql = "select * from course where name like '%"
        +keys+"%' or credit like '%"
        +keys+"%'" ;
      return pool.execute(sql);
    },
    //通过id查询
    findById(id){
      var sql = "select * from course where id = "+id;
      return pool.execute(sql);
    },
    findAll(){
      var sql = "select * from course";
      return pool.execute(sql);
    },
    batchDelete(ids){
      var sql = "delete from course where id in ("+ids.join()+")";
      return pool.execute(sql);
    },
    save(course){
      var sql = "insert into course values(null,'"
      +course.name+"',"
      +course.credit+")";
      return pool.execute(sql);
    },
    update(course){
      var sql = "update course set name = '"
      +course.name+"',credit = "
      +course.credit+" where id ="
      +course.id;
      console.log(sql);
      return pool.execute(sql);
    }
}
