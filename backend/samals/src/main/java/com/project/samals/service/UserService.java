package com.project.samals.service;

import com.project.samals.domain.Nft;
import com.project.samals.domain.Sale;
import com.project.samals.domain.User;
import com.project.samals.dto.NftDto;
import com.project.samals.dto.ReqUserDto;
import com.project.samals.dto.SaleDto;
import com.project.samals.dto.UserDto;
import com.project.samals.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    @Transactional
    public UserDto signup(ReqUserDto userDto) {
        User user =userDto.toEntity();
        user.setCreatedTime(new Date());
        user.setUpdatedTime(new Date());

        userRepository.save(user);

        if(user.getUserNickname().equals(""))
            user.setUserNickname("random@"+user.getUserSeq());

        User saved=userRepository.save(user);
        return UserDto.convert(saved);
    }

    public UserDto getUserInfo(String address){
        User user = userRepository.findByWalletAddress(address);
        UserDto userDto = UserDto.convert(user);
        return userDto;
    }

    public String withdrawal(String address){
        User user = userRepository.findByWalletAddress(address);
        if(user == null)
            return "no user";
        userRepository.delete(user);
        return "delete Success";
    }

    public UserDto updateUser(ReqUserDto userDto) {
        User user = userRepository.findByWalletAddress(userDto.getWalletAddress());
        user.setUserBio(userDto.getUserBio());
        user.setUserImgUrl(userDto.getUserImgUrl());
        user.setUserNickname(userDto.getUserNickname());
        user.setUpdatedTime(new Date());

        User saved=userRepository.save(user);
        return UserDto.convert(saved);
    }

    public List<SaleDto> getSaleHistory(String address){
        User user = userRepository.findByWalletAddress(address);
        List<SaleDto> saleHistory = new ArrayList<>();
        for(Sale sale : user.getSaleHistory()){
            saleHistory.add(SaleDto.convert(sale));
        }
        return saleHistory;
    }

}
