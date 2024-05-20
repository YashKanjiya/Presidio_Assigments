package com.spring.azure.model.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.spring.azure.commonresponse.CommonAPIDataResponse;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class GetAllTXNMasterResponse extends CommonAPIDataResponse {

	@JsonProperty("Article")
    private List<TXNMasterData> TXNMasterList;
}
