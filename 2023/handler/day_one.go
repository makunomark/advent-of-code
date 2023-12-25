package handler

import (
	"fmt"
	"strconv"
	"unicode"
)

func DayOne() {
	data, err := ReadFile("day_one.txt")
	if err != nil {
		fmt.Println(err)
		return
	}

	calibrationValueSum := 0
	for _, line := range data {
		// for each line, get first digit and last digit
		// we can do this by converting the string to a slice of runes
		lineRunes := []rune(line)
		// lets find the first digit
		firstDigit := 0
		for _, r := range lineRunes {
			if unicode.IsDigit(r) {
				firstDigit = convertRuneToInt(r)
				break
			}
		}

		lastDigit := 0
		for i := len(lineRunes) - 1; i >= 0; i-- {
			if unicode.IsDigit(lineRunes[i]) {
				lastDigit = convertRuneToInt(lineRunes[i])
				break
			}
		}

		calibrationValue := (firstDigit * 10) + lastDigit
		calibrationValueSum += calibrationValue
	}

	fmt.Println("Calibration value sum:", calibrationValueSum)
}

func convertRuneToInt(r rune) int {
	digit, err := strconv.Atoi(string(r))
	if err != nil {
		fmt.Println("Error converting rune to digit:", err)
		return 0
	}
	return digit
}
