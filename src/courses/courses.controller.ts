import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto} from './create-course.dto';


@Controller('courses')
export class CoursesController {
    constructor(private coursesSerice: CoursesService)  {}

    @Get()
    async getCourses() {
        const courses = await this.coursesSerice.getCourses();
        return courses;
    }

    @Get(':CourseId')
    async getCourse(@Param('courseId') courseId) {
        const course =  await this.coursesSerice.getCourse(courseId);
        return course;
    }

    @Post()
    async addCourse(@Body() createCourseDto: CreateCourseDto) {
        const course = await this.coursesSerice.addCourse(createCourseDto);
        return course;
    }

    @Delete()
    async deleteCourse(@Query() query) {
        const courses = await this.coursesSerice.deleteCourse(query.courseId);
        return courses;
    }
}
