for i in {1..30}; do echo $(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 100000000 | head -n 1) > /tmp/data/$i.txt; done
