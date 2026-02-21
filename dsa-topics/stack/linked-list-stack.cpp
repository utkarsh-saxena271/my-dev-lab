#include <iostream>
#include <list>
using namespace std;

class Stack{
    list<int> ll;

    public:
        int top(){
            return ll.front();
        }
        void push(int val){
            ll.push_front(val);
        }
        void pop(){
            ll.pop_front();
        }
        bool empty(){
            if(ll.size() == 0){
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