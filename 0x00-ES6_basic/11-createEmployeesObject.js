export default function createEmployeesObject(departmentName, employees) {
	const ans = {}
	ans[`${departmentName}`] = employees;
	return ans;
}

