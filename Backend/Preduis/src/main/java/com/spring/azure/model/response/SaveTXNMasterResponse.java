package com.spring.azure.model.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.spring.azure.commonresponse.CommonAPIDataResponse;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SaveTXNMasterResponse extends CommonAPIDataResponse {

	@JsonProperty("_id")
    private String id;
}
