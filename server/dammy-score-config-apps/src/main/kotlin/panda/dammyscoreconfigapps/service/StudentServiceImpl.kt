package panda.dammyscoreconfigapps.service

import org.apache.ibatis.annotations.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import panda.dammyscoreconfigapps.repository.StudentRepository
import panda.dammyscoreconfigapps.domain.Student

@Service
class StudentServiceImpl : StudentService {

  @Autowired
  lateinit var studentRepository: StudentRepository

  override fun getStudents(): List<Student> {
    return studentRepository.selectStudents()
  }

  override fun getStudentById(id: Int?): Student {
      return studentRepository.selectStudentById(id)
  }

  override fun getInsertStudent(Student: Student): List<Student> {
      studentRepository.insertStudentById(Student)
      return studentRepository.selectStudents()
  }

  override fun getUpdateStudent(id: Int, Student: Student): Student {
      Student.id = id
      return studentRepository.selectStudentById(id)
  }

  override fun getDeleteStudentById(@Param("id") id: Int?): Student {
      studentRepository.deleteStudentById(id)
      return studentRepository.selectStudentById(id)
  }
}
