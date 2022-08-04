package com.jangbo.api.service;

import com.jangbo.api.request.StoreEditPatchReq;
import com.jangbo.api.request.StoreRegisterPostReq;
import com.jangbo.api.response.StoreInfoRes;
import com.jangbo.db.dto.MarketDto;
import com.jangbo.db.entity.Market;
import com.jangbo.db.entity.Seller;
import com.jangbo.db.entity.Store;
import com.jangbo.db.repository.MarketRepository;
import com.jangbo.db.repository.SellerRepository;
import com.jangbo.db.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class StoreService {

    private final StoreRepository storeRepository;
    private final SellerRepository sellerRepository;

    private final MarketRepository marketRepository;



    /** 상점- 전체 목록 조회  */
    @Transactional(readOnly = true)
    public List<StoreInfoRes> findAll() {

        return storeRepository.findAll()
                .stream()
                .map(StoreInfoRes::new)
                .collect(Collectors.toList());
    }


    /** 상점 - 시장에 따른 상점목록 조회 */
    @Transactional(readOnly = true)
    public List<Store> findStoresByMarket(Integer marketNo) {
        return storeRepository.findByMarket(marketRepository.getOne(marketNo));

    }

    /** 상점 - 상점 정보 조회 */
    @Transactional(readOnly = true)
    public StoreInfoRes findById(int storeNo) {

        Store store = storeRepository.findById(storeNo)
                .orElseThrow(() -> new IllegalAccessError("[storeNo=" + storeNo + "] 해당 상점이 존재하지 않습니다."));

        return new StoreInfoRes(store);
    }


    /** 상점 - 상점 등록 */
    @Transactional
    public Integer save(StoreRegisterPostReq storeRegisterPostReq) {
        Seller seller = sellerRepository.findOne(storeRegisterPostReq.getSellerNo());
        Market market = marketRepository.getOne(storeRegisterPostReq.getMarketNo());
        Store store = Store.builder()
                .seller(seller)
                .market(market)
                .storeName(storeRegisterPostReq.getStoreName())
                .storeCategory(storeRegisterPostReq.getStoreCategory())
                .storePhone(storeRegisterPostReq.getStorePhone())
                .storeAddr(storeRegisterPostReq.getStoreAddr())
                .build();
        return storeRepository.save(store).getStoreNo();
    }

    /** 상점 - 상점 정보 수정 */
    @Transactional
    public Integer update(Integer storeNo, StoreEditPatchReq storeEditPatchReq) {

        Store store = storeRepository.findById(storeNo)
                .orElseThrow(() -> new IllegalAccessError("[storeNo=" + storeNo + "] 해당 상점은 존재하지 않습니다."));

        store.update(storeEditPatchReq.getStoreName(),storeEditPatchReq.getStoreCategory(),storeEditPatchReq.getStorePhone(),storeEditPatchReq.getStoreAddr());

        return storeNo;
    }

    /** 상점 - 상점정보삭제 */
    @Transactional
    public void delete(Integer storeNo) {

        Store store = storeRepository.findById(storeNo)
                .orElseThrow(() -> new IllegalAccessError("[storeNo=" + storeNo + "] 해당 상점이 존재하지 않습니다."));

        storeRepository.delete(store);
    }




}
