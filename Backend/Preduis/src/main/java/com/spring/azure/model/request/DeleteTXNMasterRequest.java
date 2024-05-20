package com.spring.azure.model.request;


import com.spring.azure.commonrequest.CommonAllAPIDataRequest;

import io.micrometer.common.util.StringUtils;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DeleteTXNMasterRequest extends CommonAllAPIDataRequest {

	private String id;

    public boolean checkBadRequest() {
//    	 if (StringUtils.isEmpty(this.getCompany_id())) {
//             return true;
//         }
        if (StringUtils.isEmpty(this.getId())) {
            return true;
        }
        return false;
    }
}