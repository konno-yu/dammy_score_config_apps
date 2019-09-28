package panda.dammyscoreconfigapps.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import panda.dammyscoreconfigapps.service.StudentService
import panda.dammyscoreconfigapps.domain.Student


@RestController
@CrossOrigin
@RequestMapping("/api")
class StudentResource() {

  @Autowired
  lateinit var studentService: StudentService

  // 全件取得
  @GetMapping("/students")
  fun getStudents(): List<Student> {
      return studentService.getStudents()
  }

  // 1件取得
  @GetMapping("/students/{id}")
  fun getStudentById(@PathVariable("id") id: Int?): Student {
      return studentService.getStudentById(id)
  }

  // 1件作成
  @PostMapping("/students")
  fun createStudentById(@RequestBody Student: Student): List<Student> {
      return studentService.getInsertStudent(Student)
  }

  // 1件編集
  @PutMapping("/students/{id}")
  fun updateStudentById(@PathVariable("id") id: Int, @RequestBody Student: Student): Student {
      return studentService.getUpdateStudent(id, Student)
  }

  // 1件削除
  @DeleteMapping("/students/{id}")
  fun deleteStudentById(@PathVariable("id") id: Int?): Student {
      return studentService.getDeleteStudentById(id)
  }
}