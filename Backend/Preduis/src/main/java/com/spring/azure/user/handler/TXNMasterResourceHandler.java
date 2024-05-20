package com.spring.azure.user.handler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.JsonNode;
import com.spring.azure.commonresponse.CommonAPIDataResponse;
import com.spring.azure.helper.HeaderProcessingHelper;
import com.spring.azure.model.request.DeleteTXNMasterRequest;
import com.spring.azure.model.request.GetAllTXNMasterRequest;
import com.spring.azure.model.request.GetTXNMasterRequest;
import com.spring.azure.model.request.SaveTXNMasterRequest;
import com.spring.azure.model.request.UpdateTXNMasterRequest;
import com.spring.azure.model.response.GetAllTXNMasterResponse;
import com.spring.azure.model.response.GetTXNMasterResponse;
import com.spring.azure.model.response.SaveTXNMasterResponse;
import com.spring.azure.user.service.TXNMasterRepository;
import com.spring.azure.util.Utils;

@Component
public class TXNMasterResourceHandler {

	@Autowired
    private TXNMasterRepository txnMasterRepository;

    public ResponseEntity<JsonNode>SaveTXNMazster(HttpHeaders headers, SaveTXNMasterRequest saveTXNMasterRequest) 
    {
        HeaderProcessingHelper.setRequestHeaders(saveTXNMasterRequest, headers);

        if (saveTXNMasterRequest.checkBadRequest()) 
        {
            return new ResponseEntity<>(Utils.generateErrorResponse("BAD_REQUEST"), HttpStatus.OK);
        }
        SaveTXNMasterResponse saveTXNMasterResponse = txnMasterRepository.saveTxnMaster(saveTXNMasterRequest);
        return Utils.getJsonNodeResponseEntity(saveTXNMasterResponse);
    }

    public ResponseEntity<JsonNode> UpdateTxnMaster(HttpHeaders headers, UpdateTXNMasterRequest updateTXNMasterRequest) 
    {
        HeaderProcessingHelper.setRequestHeaders(updateTXNMasterRequest, headers);

        if (updateTXNMasterRequest.checkBadRequest()) {
            return new ResponseEntity<>(Utils.generateErrorResponse("BAD_REQUEST"), HttpStatus.OK);
        }
        CommonAPIDataResponse commonAPIDataResponse = txnMasterRepository.updateTXNMaster(updateTXNMasterRequest);
        return Utils.getJsonNodeResponseEntity(commonAPIDataResponse);
    }

    public ResponseEntity<JsonNode> DeleteTXNMasterMaster(HttpHeaders headers, DeleteTXNMasterRequest deleteTXNMasterRequest) 
    {
        HeaderProcessingHelper.setRequestHeaders(deleteTXNMasterRequest, headers);

        if (deleteTXNMasterRequest.checkBadRequest()) 
        {
            return new ResponseEntity<>(Utils.generateErrorResponse("BAD_REQUEST"), HttpStatus.OK);
        }
        CommonAPIDataResponse commonAPIDataResponse = txnMasterRepository.deleteTxnMaster(deleteTXNMasterRequest);
        return Utils.getJsonNodeResponseEntity(commonAPIDataResponse);
    }
//
//
    public ResponseEntity<JsonNode> GetTXNMaster(HttpHeaders headers, GetTXNMasterRequest getTXNMasterRequest) 
    {
        HeaderProcessingHelper.setRequestHeaders(getTXNMasterRequest, headers);

        if (getTXNMasterRequest.checkBadRequest()) 
        {
            return new ResponseEntity<>(Utils.generateErrorResponse("BAD_REQUEST"), HttpStatus.OK);

        }
        GetTXNMasterResponse getTXNMasterResponse = txnMasterRepository.getTXNMaster(getTXNMasterRequest);
        return Utils.getJsonNodeResponseEntity(getTXNMasterResponse);
    }

    public ResponseEntity<JsonNode> GetAllTXNMaster(HttpHeaders headers, GetAllTXNMasterRequest getAllTXNMasterRequest) 
    {
        HeaderProcessingHelper.setRequestHeaders(getAllTXNMasterRequest, headers);

        if (getAllTXNMasterRequest.checkBadRequest()) {
            return new ResponseEntity<>(Utils.generateErrorResponse("BAD_REQUEST"), HttpStatus.OK);
        }
        GetAllTXNMasterResponse getAllTXNMasterResponse = txnMasterRepository.AllTXNMasterMaster(getAllTXNMasterRequest);
        return Utils.getJsonNodeResponseEntity(getAllTXNMasterResponse);
    }

}
