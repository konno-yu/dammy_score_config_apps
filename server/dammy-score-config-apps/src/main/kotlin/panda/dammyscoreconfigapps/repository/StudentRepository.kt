package panda.dammyscoreconfigapps.repository

import org.apache.ibatis.annotations.*
import org.springframework.stereotype.Repository
import panda.dammyscoreconfigapps.domain.Student

@Mapper
@Repository
interface StudentRepository {

    @Select("SELECT * FROM students;")
    fun selectStudents(): List<Student>

    @Select("SELECT * FROM students WHERE id = #{id}")
    fun selectStudentById(@Param("id") id: Int?): Student

    @Insert("INSERT INTO students(name) values(#{name})")
    fun insertStudentById(student: Student): Int

    @Update("UPDATE students SET name=#{name}, WHERE id=#{id}")
    fun updateStudentById(student: Student): Int

    @Delete("DELETE FROM students WHERE id=#{id}")
    fun deleteStudentById(@Param("id") id: Int?): Int

}
