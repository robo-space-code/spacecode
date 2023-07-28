package com.bknote71.multinlpio.protocol;

import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Data;

@JsonTypeName("centergame")
@Data
public class CEnterGame extends Protocol {
    private String username;
}
