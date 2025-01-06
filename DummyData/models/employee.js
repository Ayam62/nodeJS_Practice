const employeeSchema = new mongoose.Schema({
    name:"Ayam",
    salary:3,
    language:"Python",
    city:"damak",
    isManager:true
  });

  const Employee = mongoose.model('Employee', employeeSchema);

  export default Employee