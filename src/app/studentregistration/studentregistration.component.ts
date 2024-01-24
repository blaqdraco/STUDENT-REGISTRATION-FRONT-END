import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.scss']
})
export class StudentregistrationComponent {
  
  StudentArray : any[] = [];
  currentStudentID = "";


    
  firstname: string="";
  middlename: string="";
  lastname: string= "";
  gender:string="";
  program:string="";
  year_study: string="";
  college_name:string="";
  department_name:string="";


  constructor(private http: HttpClient )
  {
    this.getAllStudent();
  }
  getAllStudent() {
    this.http.get("http://localhost:3000/student/getAll").subscribe((resultData: any)=>{
        console.log(resultData);
        this.StudentArray=resultData.data;
    })
  }

  setUpdate(data: any)
  {
   this.firstname = data.firstname;
   this.middlename = data.middlename;
   this.lastname = data.lastname;
   this.gender = data.gender;
   this.program = data.program;
   this.year_study = data.year_study;
   this.college_name = data.college_name;
   this.department_name = data.department_name;
 
   this.currentStudentID = data._id;
  
  }
 
  UpdateRecords()
  {
    let bodyData = {
      "firstname" : this.firstname,
      "middlename" : this.middlename,
      "lastname" : this.lastname,
      "gender": this.gender,
      "program": this.program,
      "year_study": this.year_study,
      "college_name": this.college_name,
      "department_name": this.department_name
 
    };
    
    this.http.patch("http://localhost:3000/student/update"+ "/"+this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Updateddd")
        this.getAllStudent();
      
    });
  }
  save()
  {
    if(this.currentStudentID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }
  
  setDelete(data: any) {
    this.http.delete("http://localhost:3000/student/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Deletedddd")
        this.getAllStudent();
  
    });
    }


  register()
  {
 
    let bodyData = {
      "firstname" : this.firstname,
      "middlename" : this.middlename,
      "lastname" : this.lastname,
      "gender": this.gender,
      "program":  this.program,
      "year_study": this.year_study,
      "college_name": this.college_name,
      "department_name": this.department_name
  };
  if (this.gender === 'MALE') {
    bodyData.gender = 'MALE';
  } else if (this.gender === 'FEMALE') {
    bodyData.gender = 'FEMALE';
  }

  if (this.program === 'Bachelor of Science in Computer Engineering (BSc CE)') {
    bodyData.program = 'Bachelor of Science in Computer Engineering (BSc CE)';

  } else if (this.program === 'Bachelor of Science in Computer Science (BSc CS)') {
    bodyData.program = 'Bachelor of Science in Computer Science (BSc CS)';


  } else if (this.program === 'Bachelor of Science in Software Engineering (BSc SE)') {
    bodyData.program = 'Bachelor of Science in Software Engineering (BSc SE)';

  } else if (this.program === 'Bachelor of Science in Cyber Security and Digital Forensics (BSc CSDFE)') {
    bodyData.program = 'Bachelor of Science in Cyber Security and Digital Forensics (BSc CSDFE)';

  } else if (this.program === 'Bachelor of Science in Business Information Systems (BSc BIS)') {
    bodyData.program = 'Bachelor of Science in Business Information Systems (BSc BIS)';

  } else if (this.program === 'Bachelor of Science in Health Information Systems (BSc HIS)') {
    bodyData.program = 'Bachelor of Science in Health Information Systems (BSc HIS)';

  } else if (this.program === 'Bachelor of Science in Information Systems (BSc IS)') {
    bodyData.program = 'Bachelor of Science in Information Systems (BSc IS)';

  } else if (this.program === 'Bachelor of Science in Instructional Design and Information Technology (BSc IDIT)') {
    bodyData.program = 'Bachelor of Science in Instructional Design and Information Technology (BSc IDIT)';
    
  } else if (this.program === 'Bachelor of Science in Multimedia Technology and Animation (BSc MTA)') {
    bodyData.program = 'Bachelor of Science in Multimedia Technology and Animation (BSc MTA)';
    
  } else if (this.program === 'Bachelor of Science in Telecommunications Engineering (BSc TE)') {
    bodyData.program = 'Bachelor of Science in Telecommunications Engineering (BSc TE)';

  } else if (this.program === 'Bachelor of Science in Digital Content and Broadcasting Engineering (BSc DCBE)') {
    bodyData.program = 'Bachelor of Science in Digital Content and Broadcasting Engineering (BSc DCBE)';
    
  } else if (this.program === 'Bachelor of Science in Computer Networks and Information Security Engineering (BSc CNISE)') {
    bodyData.program = 'Bachelor of Science in Computer Networks and Information Security Engineering (BSc CNISE)';

  } else if (this.program === 'Diploma in Cyber Security and Digital Forensics (Dip. CSDF)') {
    bodyData.program = 'Diploma in Cyber Security and Digital Forensics (Dip. CSDF)';

  } else if (this.program === 'Diploma in Educational Technology (Dip. ET)') {
    bodyData.program = 'Diploma in Educational Technology (Dip. ET)';

  } else if (this.program === 'Diploma in Information and Communication Technology (Dip. ICT)') {
    bodyData.program = 'Diploma in Information and Communication Technology (Dip. ICT)';
  }

  if (this.year_study === 'First Year') {
    bodyData.year_study = 'First Year';
  } else if (this.year_study === 'Second Year') {
    bodyData.year_study = 'Second Year';
  } else if (this.year_study === 'Third Year') {
    bodyData.year_study = 'Third Year';
  } else if (this.year_study === 'Fourth Year') {
    bodyData.year_study = 'Fourth Year';
  }

  if(this.college_name === 'The College of Informatics and Virtual Education (CIVE)'){

    bodyData.college_name = 'The College of Informatics and Virtual Education (CIVE)';
  }

  if(this.department_name === 'Department of Electronics and Telecommunications Engineering (ETE)'){

    bodyData.department_name = 'Department of Electronics and Telecommunications Engineering (ETE)';

  } else if (this.department_name === 'Department of Computer Science and Engineering (DoCS&E)'){
    bodyData.department_name = 'Department of Computer Science and Engineering (DoCS&E)';

  }else if (this.department_name === 'Department of Information Systems and Technology (DIS&T)'){
    bodyData.department_name = 'Department of Information Systems and Technology (DIS&T)';
  }



    this.http.post("http://localhost:3000/student/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully")
         //this.getAllEmployee();
        this.firstname = '';
        this.middlename  = '';
        this.lastname  = '';
        this.gender = '';
        this.program = '';
        this.year_study = '';
        this.college_name = '';
        this.department_name = '';
        //this.getAllStudent();
    },
   
    );
  }


}
