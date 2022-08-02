package com.jangbo.db.repository;

import com.jangbo.db.dto.GugunDto;
import com.jangbo.db.entity.Gugun;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface GugunRepository extends JpaRepository<Gugun,Integer> {

    @Query("select new com.jangbo.db.dto.GugunDto(g.gugunCode, g.sidoName, g.gugunName) from Gugun g where g.gugunCode like :sidocode% ")
    List<GugunDto> findGugunBySido(@Param("sidocode") String sidocode);
}