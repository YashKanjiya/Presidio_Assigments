package com.spring.azure.commonresponse;

import java.util.ArrayList;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class ErrorResponse {

    @JsonProperty("success")
    private int success;

    @JsonProperty("error")
    private ArrayList<String> error;

    @JsonIgnore
    @JsonProperty("data")
    private Object data;

}
