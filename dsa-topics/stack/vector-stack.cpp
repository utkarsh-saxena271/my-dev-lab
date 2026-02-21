#include <iostream>
#include <vector>
using namespace std;

class Stack{
    vector<int> v;

    public:
        int top(){
            return v[v.size()-1];
        }
        void push(int val){
            v.push_back(val);
        }
        void pop(){
            v.pop_back();
        }
        bool empty(){
            if(v.size() == 0){
                return true;
            }
            return false;
        }
};


int main(){
    Stack s1;
    s1.push(10);
    s1.push(20);
    while(!s1.empty()){
        cout<<s1.top()<<" ";
        s1.pop();
    }
    cout<<endl;

    return 0;
}