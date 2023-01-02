export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
	const cictudent = getListStudents.filter((value) => value.location === city);
	 cictudent.map(function (valuea) {
		newGrades.map(function (valueb) {
			if (valuea.id === valueb.studentId) {
				valuea.grade = valueb.grade;
			};
			if (!(valuea.grade)) {
				valuea.grade = "N/A";
			};
		});
	});
	return (cictudent);
}
