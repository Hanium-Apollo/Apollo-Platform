package com.Teletubbies.Apollo.service;

import com.Teletubbies.Apollo.domain.Tag;
import com.Teletubbies.Apollo.dto.tag.ConvertTag;
import com.Teletubbies.Apollo.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class TagService {
    private final TagRepository tagRepository;
    @Transactional
    public Tag saveTag(String tagName){
        if (tagRepository.existsByName(tagName))
            return findByTagName(tagName);
        return tagRepository.save(new Tag(tagName));
    }
    @Transactional
    public List<Tag> saveTags(List<String> tagNames){
        List<Tag> tags = tagNames.stream()
                .map(tagName -> {
                    if (!tagRepository.existsByName(tagName)) {
                        return tagRepository.save(new Tag(tagName));
                    } else {
                        return tagRepository.findByName(tagName)
                                .orElseThrow(() -> new IllegalArgumentException("해당 태그에 대한 정보가 없습니다."));
                    }
                })
                .collect(Collectors.toList());
        return tags;
    }
    public boolean existsByTagName(String tagName){
        return tagRepository.existsByName(tagName);
    }
    public Tag findByTagId(Long id){
        return tagRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 태그 ID는 존재하지 않습니다."));
    }
    public Tag findByTagName(String tagName){
        return tagRepository.findByName(tagName)
                .orElseThrow(() -> new IllegalArgumentException("해당 이름에 맞는 태그가 없습니다."));
    }
    public List<ConvertTag> findAllTag(){
        return tagRepository.findAll().stream()
                .map(tag -> new ConvertTag(tag.getId(), tag.getName()))
                .toList();
    }
    @Transactional
    public void deleteTag(Tag deleteTag){
        tagRepository.delete(deleteTag);
    }
}
