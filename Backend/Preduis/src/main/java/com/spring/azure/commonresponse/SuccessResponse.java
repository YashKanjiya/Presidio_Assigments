package com.spring.azure.commonresponse;

import java.util.ArrayList;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class SuccessResponse {

    @JsonProperty("success")
    private int success;

    @JsonProperty("error")
    private ArrayList<String> error;

    @JsonProperty("data")
    private Object data;

    public SuccessResponse(int success, ArrayList<String> error, Object data) {
        this.success = success;
        this.error = error;
        this.data = data;
    }
}
