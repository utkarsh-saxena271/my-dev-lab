#include <iostream>
#include <stack> 
using namespace std;



int main(){
    stack<int> s1;
    s1.push(10);
    s1.push(20);
    while(!s1.empty()){
        cout<<s1.top()<<" ";
        s1.pop();
    }
    cout<<endl;

    return 0;
}