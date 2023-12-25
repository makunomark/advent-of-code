package handler

import "fmt"

func DayOne() {
	data, err := ReadFile("day_one.mock.txt")
	if err != nil {
		fmt.Println(err)
		return
	}
	for _, line := range data {
		fmt.Println(line)
	}
}
