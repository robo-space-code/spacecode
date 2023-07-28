package com.bknote71.multinlpio.data;

import com.bknote71.multinlpio.protocol.info.SkillInfo;
import com.bknote71.multinlpio.protocol.info.StatInfo;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class DataManager {

    public static Map<Integer, StatInfo> statInfoMap;
    public static Map<Integer, SkillInfo> skillInfoMap;
    public static WordData[] words;

    private static Environment env;
    private static ResourceLoader resourceLoader; // classpath 에 있는 resource 읽기(로더)

    @Autowired
    public DataManager(Environment env, ResourceLoader resourceLoader) {
        this.env = env;
        this.resourceLoader = resourceLoader;
    }

    public static void loadData() {
        statInfoMap = DataManager.<StatData, Integer, StatInfo>loadJson("stat_data").makeMap();
        skillInfoMap = DataManager.<SkillData, Integer, SkillInfo>loadJson("skill_data").makeMap();

        // load word list
        List<WordData> wordList = new ArrayList<>();
        wordList.addAll(loadWord("wordlist.csv"));
        wordList.addAll(loadWord("foodword.txt"));
        wordList.addAll(loadWord("techword.txt"));
        words = wordList.toArray(new WordData[wordList.size()]);
    }

    private static <T extends ILoader<K, V>, K, V> T loadJson(String path) {
        try {
            String fullPath = env.getProperty("data_path") + path + ".json";
            Resource resource = resourceLoader.getResource(fullPath);
            byte[] bytes = resource.getInputStream().readAllBytes();
            String text = new String(bytes);
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(text, new TypeReference<>() {
            });
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    // csv 읽기
    private static List<WordData> loadWord(String path) {
        String fullPath = env.getProperty("data_path") + path;
        Resource resource = resourceLoader.getResource(fullPath);
        List<WordData> wordlist = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new InputStreamReader(resource.getInputStream()))) {
            // skip first line
            br.readLine();

            // 한 문장씩 읽어야 함
            String line;
            while ((line = br.readLine()) != null && !line.isEmpty()) {
                String[] strs = line.split(",");
                if (path.endsWith(".csv")) {
                    if (strs[2] != "명" || strs[1].contains("0") || strs[1].contains("1") || strs[1].contains("2"))
                        continue;

                    wordlist.add(new WordData(strs[1], strs[2]));
                } else {
                    wordlist.add(new WordData(strs[0], "명"));
                }
            }
            return wordlist;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
