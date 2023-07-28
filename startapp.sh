RESOURCES_PATH="./src/main/resources"
TARGET_PORT=8080

npm install
npm run build

# copy
cp -f  "${RESOURCES_PATH}/static/dist/index.html" "${RESOURCES_PATH}/templates/"
# echo "시발" > /home/ec2-user/nohup.out

process_id=$(lsof -ti:8080)

if [ -n "$process_id" ]; then
  kill $process_id
fi

./gradlew clean build
nohup java -jar -Dserver.port=${TARGET_PORT} /home/ec2-user/multi-nlpgame/build/libs/* > /home/ec2-user/nohup.out 2>&1 &