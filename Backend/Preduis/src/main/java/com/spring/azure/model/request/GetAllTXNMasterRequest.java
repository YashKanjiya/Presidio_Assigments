package com.spring.azure.model.request;

import com.spring.azure.commonrequest.CommonAllAPIDataRequest;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class GetAllTXNMasterRequest extends CommonAllAPIDataRequest {

	// Filter

	 
	    

//		search

		private String keyword;

		public boolean checkBadRequest() {
//	        if (StringUtils.isEmpty(this.getCompany_id())) {
//	            return true;
//	        }
			return false;
		}
}
