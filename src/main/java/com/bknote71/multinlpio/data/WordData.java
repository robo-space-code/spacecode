package com.bknote71.multinlpio.data;

import lombok.Data;

@Data
public class WordData {
    private String word;
    private String type;

    public WordData(String word, String type) {
        this.word = word;
        this.type = type;
    }
}
