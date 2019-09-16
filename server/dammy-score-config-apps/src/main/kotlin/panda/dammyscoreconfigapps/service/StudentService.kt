package panda.dammyscoreconfigapps.service

import panda.dammyscoreconfigapps.domain.Student

interface StudentService {

  fun getStudents(): List<Student>

  fun getStudentById(id: Int?): Student

  fun getInsertStudent(Student: Student): List<Student>

  fun getUpdateStudent(id: Int, Student: Student): Student

  fun getDeleteStudentById(id: Int?): Student

}