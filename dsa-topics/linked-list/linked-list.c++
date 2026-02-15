#include <iostream>
using namespace std;

// Node Class
class Node{
    public:
        int data;
        Node* next;

        Node(int val){
            data = val;
            next = NULL;
        }
     
};

// List Class
class List{
    Node* head;
    Node* tail;

    public:
        List(){
            head = tail = NULL;
        }
        
        void push_front(int val){
            Node* newNode = new Node(val);
            if(head == NULL){
                head = tail = newNode;
                return;
            }else{
                newNode->next = head;
                head = newNode;
            }
        }

        void push_back(int val){
            Node* newNode = new Node(val);
            if(head == NULL){
                head = tail = newNode;
            }else{
                tail->next = newNode;
                tail = newNode;
            }
        }

        // Print Linked List
        void printLinkedList(){
            Node* temp = head;
            while (temp != NULL){
                cout << temp->data << "->";
                temp = temp->next; 
            }
            cout << "NULL" << endl;
        }
};


 
int main(){
    List ll;
    ll.push_front(1);
    ll.push_front(2);
    ll.push_front(3);
    ll.push_back(4);

    ll.printLinkedList();

    return 0;
}