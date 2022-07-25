npx rimraf ./src/grpc/protos && mkdir ./src/grpc/protos && cd ./src/grpc/proto && protoc *.proto -I. --grpc-web_out=import_style=typescript,mode=grpcwebtext:../protos
