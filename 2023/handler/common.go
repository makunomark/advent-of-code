package handler

import (
	"bufio"
	"fmt"
	"os"
)

func ReadFile(file_name string) ([]string, error) {
	// Open the file
	file, err := os.Open(fmt.Sprintf("data/%s", file_name))
	if err != nil {
		return nil, fmt.Errorf("Error opening file: %v", err)
	}
	defer file.Close()

	// Create a new scanner to read the file line by line
	scanner := bufio.NewScanner(file)

	// Read the file line by line
	var lines []string
	for scanner.Scan() {
		line := scanner.Text()
		lines = append(lines, line)
	}

	// Check for any errors during scanning
	if err := scanner.Err(); err != nil {
		return nil, fmt.Errorf("Error scanning file: %v", err)
	}

	return lines, nil
}
